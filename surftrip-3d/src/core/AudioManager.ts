/**
 * AudioManager — Phase 4: Audio & Feedback
 *
 * Uses Web Audio API to synthesize all game sounds procedurally.
 * No external audio files needed. Provides background music,
 * SFX for game actions, and haptic feedback on mobile.
 */

type SoundName =
  | 'jump'
  | 'land'
  | 'slide'
  | 'collect'
  | 'crash'
  | 'laneSwitch'
  | 'highScore'
  | 'uiClick'
  | 'powerUp'
  | 'shieldBreak'
  | 'comboUp'
  | 'comboBreak';

class AudioManagerSingleton {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private musicGain: GainNode | null = null;
  private sfxGain: GainNode | null = null;
  private _muted = false;
  private musicOscs: OscillatorNode[] = [];
  private musicPlaying = false;
  private musicInterval: ReturnType<typeof setInterval> | null = null;

  get muted(): boolean {
    return this._muted;
  }

  /** Must be called from a user gesture to unlock AudioContext */
  init(): void {
    if (this.ctx) return;
    this.ctx = new AudioContext();
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.value = 0.6;
    this.masterGain.connect(this.ctx.destination);

    this.sfxGain = this.ctx.createGain();
    this.sfxGain.gain.value = 0.7;
    this.sfxGain.connect(this.masterGain);

    this.musicGain = this.ctx.createGain();
    this.musicGain.gain.value = 0.18;
    this.musicGain.connect(this.masterGain);
  }

  private ensureCtx(): AudioContext {
    if (!this.ctx) this.init();
    if (this.ctx!.state === 'suspended') {
      this.ctx!.resume();
    }
    return this.ctx!;
  }

  play(sound: SoundName): void {
    if (this._muted) return;
    const ctx = this.ensureCtx();
    const now = ctx.currentTime;

    switch (sound) {
      case 'jump':
        this.playJump(ctx, now);
        break;
      case 'land':
        this.playLand(ctx, now);
        break;
      case 'slide':
        this.playSlide(ctx, now);
        break;
      case 'collect':
        this.playCollect(ctx, now);
        break;
      case 'crash':
        this.playCrash(ctx, now);
        break;
      case 'laneSwitch':
        this.playLaneSwitch(ctx, now);
        break;
      case 'highScore':
        this.playHighScore(ctx, now);
        break;
      case 'uiClick':
        this.playUIClick(ctx, now);
        break;
      case 'powerUp':
        this.playPowerUp(ctx, now);
        break;
      case 'shieldBreak':
        this.playShieldBreak(ctx, now);
        break;
      case 'comboUp':
        this.playComboUp(ctx, now);
        break;
      case 'comboBreak':
        this.playComboBreak(ctx, now);
        break;
    }
  }

  /** Jump: ascending pitch sweep */
  private playJump(ctx: AudioContext, now: number): void {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(300, now);
    osc.frequency.exponentialRampToValueAtTime(600, now + 0.15);
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
    osc.connect(gain).connect(this.sfxGain!);
    osc.start(now);
    osc.stop(now + 0.2);
  }

  /** Land: soft thud */
  private playLand(ctx: AudioContext, now: number): void {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(120, now);
    osc.frequency.exponentialRampToValueAtTime(60, now + 0.12);
    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
    osc.connect(gain).connect(this.sfxGain!);
    osc.start(now);
    osc.stop(now + 0.15);
  }

  /** Slide: swoosh noise */
  private playSlide(ctx: AudioContext, now: number): void {
    const bufferSize = ctx.sampleRate * 0.3;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(2000, now);
    filter.frequency.exponentialRampToValueAtTime(800, now + 0.25);
    filter.Q.value = 2;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
    noise.connect(filter).connect(gain).connect(this.sfxGain!);
    noise.start(now);
    noise.stop(now + 0.3);
  }

  /** Collect: bright ding */
  private playCollect(ctx: AudioContext, now: number): void {
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.value = 880;
    osc2.type = 'sine';
    osc2.frequency.value = 1320;
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.sfxGain!);
    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.15);
    osc2.stop(now + 0.15);
  }

  /** Crash: impact noise + low thud */
  private playCrash(ctx: AudioContext, now: number): void {
    // Low thud
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(100, now);
    osc.frequency.exponentialRampToValueAtTime(40, now + 0.4);
    oscGain.gain.setValueAtTime(0.5, now);
    oscGain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
    osc.connect(oscGain).connect(this.sfxGain!);
    osc.start(now);
    osc.stop(now + 0.45);

    // Noise burst
    const bufferSize = ctx.sampleRate * 0.3;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize) ** 2;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.35, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
    noise.connect(noiseGain).connect(this.sfxGain!);
    noise.start(now);
    noise.stop(now + 0.3);
  }

  /** Lane switch: quick swoosh */
  private playLaneSwitch(ctx: AudioContext, now: number): void {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(400, now);
    osc.frequency.exponentialRampToValueAtTime(600, now + 0.06);
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
    osc.connect(gain).connect(this.sfxGain!);
    osc.start(now);
    osc.stop(now + 0.08);
  }

  /** High score fanfare */
  private playHighScore(ctx: AudioContext, now: number): void {
    const notes = [523, 659, 784, 1047]; // C5, E5, G5, C6
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      const t = now + i * 0.12;
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.2, t + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.3);
      osc.connect(gain).connect(this.sfxGain!);
      osc.start(t);
      osc.stop(t + 0.35);
    });
  }

  /** UI click */
  private playUIClick(ctx: AudioContext, now: number): void {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = 700;
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.06);
    osc.connect(gain).connect(this.sfxGain!);
    osc.start(now);
    osc.stop(now + 0.06);
  }

  /** Power-up activation: ascending epic sweep */
  private playPowerUp(ctx: AudioContext, now: number): void {
    const notes = [440, 554, 659, 880]; // A4→C#5→E5→A5
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      const t = now + i * 0.08;
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.2, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.25);
      osc.connect(gain).connect(this.sfxGain!);
      osc.start(t);
      osc.stop(t + 0.3);
    });
  }

  /** Shield break: descending shatter */
  private playShieldBreak(ctx: AudioContext, now: number): void {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(200, now + 0.3);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
    osc.connect(gain).connect(this.sfxGain!);
    osc.start(now);
    osc.stop(now + 0.35);
  }

  /** Combo level up: ascending chime */
  private playComboUp(ctx: AudioContext, now: number): void {
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(600, now);
    osc1.frequency.exponentialRampToValueAtTime(1200, now + 0.15);
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(900, now);
    osc2.frequency.exponentialRampToValueAtTime(1800, now + 0.15);
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.sfxGain!);
    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.2);
    osc2.stop(now + 0.2);
  }

  /** Combo break: descending tone */
  private playComboBreak(ctx: AudioContext, now: number): void {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(400, now);
    osc.frequency.exponentialRampToValueAtTime(150, now + 0.2);
    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
    osc.connect(gain).connect(this.sfxGain!);
    osc.start(now);
    osc.stop(now + 0.25);
  }

  // ── Background Music ───────────────────────────────────────────
  // Procedural surf-rock-ish loop using simple oscillators and arpeggios

  startMusic(): void {
    if (this._muted || this.musicPlaying) return;
    const ctx = this.ensureCtx();
    this.musicPlaying = true;

    // Chord progression: Am - F - C - G (surf rock vibes)
    const chords = [
      [220, 261.63, 329.63], // Am
      [174.61, 220, 261.63], // F
      [261.63, 329.63, 392], // C
      [196, 246.94, 293.66], // G
    ];

    let chordIndex = 0;
    let beatIndex = 0;

    const playBeat = (): void => {
      if (!this.musicPlaying || this._muted) return;
      const now = ctx.currentTime;
      const chord = chords[chordIndex];

      // Bass note
      const bass = ctx.createOscillator();
      const bassGain = ctx.createGain();
      bass.type = 'triangle';
      bass.frequency.value = chord[0] / 2;
      bassGain.gain.setValueAtTime(0.15, now);
      bassGain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
      bass.connect(bassGain).connect(this.musicGain!);
      bass.start(now);
      bass.stop(now + 0.4);
      this.musicOscs.push(bass);

      // Arpeggio note (cycles through chord tones)
      const arpNote = chord[beatIndex % chord.length];
      const arp = ctx.createOscillator();
      const arpGain = ctx.createGain();
      arp.type = 'sine';
      arp.frequency.value = arpNote;
      arpGain.gain.setValueAtTime(0.1, now);
      arpGain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
      arp.connect(arpGain).connect(this.musicGain!);
      arp.start(now);
      arp.stop(now + 0.25);
      this.musicOscs.push(arp);

      beatIndex++;
      if (beatIndex % 4 === 0) {
        chordIndex = (chordIndex + 1) % chords.length;
      }

      // Cleanup old oscillators
      this.musicOscs = this.musicOscs.filter((o) => {
        try {
          // If ended, remove reference
          return o.context.currentTime < ctx.currentTime + 1;
        } catch {
          return false;
        }
      });
    };

    // Play at ~140 BPM (8th notes at ~214ms)
    playBeat();
    this.musicInterval = setInterval(playBeat, 214);
  }

  stopMusic(): void {
    this.musicPlaying = false;
    if (this.musicInterval) {
      clearInterval(this.musicInterval);
      this.musicInterval = null;
    }
    for (const osc of this.musicOscs) {
      try {
        osc.stop();
      } catch {
        // already stopped
      }
    }
    this.musicOscs = [];
  }

  // ── Haptic Feedback ────────────────────────────────────────────

  vibrate(pattern: number | number[]): void {
    if (this._muted) return;
    if ('vibrate' in navigator) {
      navigator.vibrate(pattern);
    }
  }

  vibrateCollect(): void {
    this.vibrate(30);
  }

  vibrateCrash(): void {
    this.vibrate([50, 30, 80]);
  }

  vibrateLaneSwitch(): void {
    this.vibrate(15);
  }

  // ── Mute Toggle ────────────────────────────────────────────────

  toggleMute(): boolean {
    this._muted = !this._muted;
    if (this.masterGain) {
      this.masterGain.gain.value = this._muted ? 0 : 0.6;
    }
    if (this._muted) {
      this.stopMusic();
    }
    return this._muted;
  }
}

export const audioManager = new AudioManagerSingleton();
