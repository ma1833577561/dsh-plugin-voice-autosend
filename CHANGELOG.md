# Changelog

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
