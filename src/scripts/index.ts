console.log("Iniciando 1")

// Vou colocar classes?

// Routing
// Seletor do elemento com verificação de tipo
const tabs = document.querySelector(".tabs") as HTMLElement | null;
const tabItems = document.querySelector(".tab-items") as HTMLElement | null;
const tabdict: { [key: number]: string } = {
    0 : "Home",
    1 : "Backup",
    2 : "Organizar",
    3 : "Pro"
}

if (tabs && tabItems) { // Verifica se ambos os elementos existem

    // Itera sobre os elementos filhos de tabs
    Array.from(tabs.children).forEach((tab, index) => {
        const tabElement = tab as HTMLElement; // Tipagem explícita

        tabElement.addEventListener("click", (event: MouseEvent) => {
            console.log(`Tab ${index + 1} clicada!`, event.clientX);

            Array.from(tabItems.children).forEach((tabItem, jndex) => {
                const choiceTab = tabItem as HTMLElement

                if(tabItem.id == tabdict[index+1]){ //fazer de acordo com o tabdict
                    tabItem.classList.remove("hidden")
                } else {
                    tabItem.classList.add("hidden")
                }

            });
        });
    });
} else {
    if (!tabs) console.error("O elemento .tabs não foi encontrado.");
    if (!tabItems) console.error("O elemento .tab-items não foi encontrado.");
}

console.log("Terminando 1")