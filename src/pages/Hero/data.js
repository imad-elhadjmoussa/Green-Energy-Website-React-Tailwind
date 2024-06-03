import installationIcon from './Icons/installation-symbol-svgrepo-com.svg'
import maintenanceIcon from "./Icons/maintenance-repair-service-svgrepo-com.svg"
import messageIcon from "./Icons/message-square-lines-alt-svgrepo-com.svg"


export const card = [
    {
        id: 1,
        title: "Installation",
        text: `
                Cubilia aptent vivamus
                congue nunc venenatis
                ridiculus dictum
        `,
        icon: installationIcon,
    },
    {
        id: 2,
        title: "Maintenance",
        text: `
        Cubilia aptent vivamus
        congue nunc venenatis
        ridiculus dictum`,
        icon: maintenanceIcon,
    },
    {
        id: 3,
        title: "Consultaion",
        text: `
                Cubilia aptent vivamus
                congue nunc venenatis
                ridiculus dictum
        `,
        icon: messageIcon,
    }
]

export function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    })
}