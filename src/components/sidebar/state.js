import { ref, computed } from 'vue'

// declarer les constante 
export const collapsed = ref(false)
// on  fait un toggle pour changer les valeurs de collapsed 
export const toggle = function () {
    if (collapsed.value) {
        collapsed.value = !collapsed.value
        localStorage.setItem('collapsed', JSON.stringify(collapsed.value))
    } else {
        collapsed.value = !collapsed.value
        localStorage.setItem('collapsed', JSON.stringify(collapsed.value))
    }
}

//const de largeur max et mini 
export const SIDEBAR_W = 180
export const SIDEBAR_W_COLLAPSED = 38

// function de calculée d'etat si collopased true  180 sinon 38 
export const computedSideBarWidth = computed(
    () => `${collapsed.value ? SIDEBAR_W_COLLAPSED : SIDEBAR_W}px `)
