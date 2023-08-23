import { createVuetify } from "vuetify"
import { aliases, mdi } from "vuetify/iconsets/mdi"
import { VOtpInput } from "vuetify/labs/VOtpInput"
import "vuetify/styles"
import "@mdi/font/css/materialdesignicons.min.css"

import colors from "vuetify/lib/util/colors.mjs"

export default createVuetify({
    components: {
        VOtpInput
    },
    icons: {
        defaultSet: "mdi",
        aliases,
        sets: {
            mdi
        }
    },
    theme: {
        themes: {
            light: {
                dark: false,
                colors: {
                    primary: colors.green.darken2
                }
            },
            dark: {
                dark: true,
                colors: {
                    primary: colors.green.darken4
                }
            }
        }
    }
})
