import create from 'zustand'
import { createSelectorHooks } from 'auto-zustand-selectors-hook'

const useMainStoreBase = create(
  set => ({
    focusTarget: null,
    setFocusTarget: focusTarget => set({ focusTarget }),

    cameraPosition: [-2,1.5,-.15],
    setCameraPosition: cameraPosition => set({ cameraPosition }),

    controlsTargetOffset: [1.5,0,0],
    setControlsTargetOffset: controlsTargetOffset => set({ controlsTargetOffset }),

    subjectData: null,
    setSubjectData: subjectData => set({ subjectData }),

    isDeskFocused: false,
    setIsDeskFocused: isDeskFocused => set({ isDeskFocused }),

    back: () => {
      set({ focusTarget: null })
      set({ cameraPosition: [0,2,0] })
      set({ controlsTargetOffset: [-.01,2,0] })
    }
  })
)

const useMainStore = createSelectorHooks(useMainStoreBase)

export default useMainStore