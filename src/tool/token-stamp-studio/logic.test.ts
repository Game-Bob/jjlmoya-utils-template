import { describe, expect, it } from 'vitest';
import { FRAME_PRESETS, clamp, createDefaultState, getFrameGeometry, getStatus, hitTestText } from './logic';

describe('token stamp studio logic', () => {
  it('starts with a usable foundry state', () => {
    const state = createDefaultState();
    expect(state.frameId).toBe(FRAME_PRESETS[0]!.id);
    expect(state.overlayOpacity).toBe(0);
    expect(state.imageSrc).toBeNull();
  });

  it('clamps numeric controls to their safe ranges', () => {
    expect(clamp(-4, 0, 1)).toBe(0);
    expect(clamp(2, 0, 1)).toBe(1);
    expect(clamp(0.4, 0, 1)).toBe(0.4);
  });

  it('builds a geometry for every frame family', () => {
    FRAME_PRESETS.forEach((frame) => expect(getFrameGeometry(frame.shape)).toBeDefined());
    expect(getFrameGeometry('circle').kind).toBe('circle');
    expect(getFrameGeometry('hexagon').points).toHaveLength(6);
  });

  it('diagnoses the two empty states before ready', () => {
    const messages = { statusReady: 'Ready', statusAddImage: 'Add an image', statusAddText: 'Finish the label' };
    const state = createDefaultState();
    expect(getStatus(state, messages).message).toBe('Add an image');
    expect(getStatus({ ...state, imageSrc: 'data:image/png;base64,a', texts: [{ id: 'a', text: '', x: 0.5, y: 0.8, size: 54, align: 'center' }], selectedTextId: 'a' }, messages).message).toBe('Finish the label');
  });

  it('detects a text layer under the pointer', () => {
    const layer = { id: 'a', text: 'Goblin', x: 0.5, y: 0.8, size: 54, align: 'center' as const };
    expect(hitTestText(layer, { x: 0.5, y: 0.8 })).toBe(true);
    expect(hitTestText(layer, { x: 0.05, y: 0.1 })).toBe(false);
  });
});
