# Changelog

## 0.3.0

- **Live transcript while recording.** Every couple of seconds the recorder's audio so
  far is transcribed in a trailing 8-second window and shown under the waveform, so you
  can see recognition working before you stop. The final transcription still decides
  what gets sent.
- **Spoken commands.** Trailing command words are stripped from the transcript and acted
  on: `换行` / `new line`, `新段落` / `new paragraph`, `句号` `逗号` `问号` `感叹号` `分号`
  `冒号` for punctuation, and `不要发送` / `don't send` to put the text in the composer
  without sending it. `发送` / `send` keeps the default auto-send behaviour.
- **One-click conflict fix.** The settings page now has a *Turn off built-in voice input*
  button next to the note. It asks the host to disable
  `@deepseek-ai/dsh-experimental-voice-input-bundle`; if the host does not expose that
  capability it falls back to manual instructions.
- Updated market screenshots.

## 0.2.0

- The plugin settings page now carries a permanent note explaining that the built-in
  "Voice input" plugin registers the same speech services, so only one of the two can
  be enabled at a time. The note says where to switch the built-in one off.
- No behaviour change to recording, transcription or auto-send.

## 0.1.0

- First public version: microphone button in the composer, local SenseVoice INT8
  transcription, and automatic sending of the transcript.
- Recognition engine and model download are composed inside the plugin's own
  `cordis.patch.yml`, so the plugin works without the built-in voice bundle.
