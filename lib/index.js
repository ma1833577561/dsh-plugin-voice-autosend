/**
 * Host loader entry for the browser-only voice input plugin.
 *
 * Everything (recorder, transcription panel, composer slot) lives in the client
 * bundle. The host half exists so the package owns a loader row and so
 * `dsh.client` is discovered.
 */
export function apply() {}
