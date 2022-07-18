
// const panels = ['panel1', 'panel2', 'panel3', 'panel4', 'panel5']
const panels = document.querySelectorAll('.panel')
var lastActivePanel = 0
var countHiddenPanel = 0

panels.forEach(panel => {
    panel.addEventListener('click', () =>{
        SearchActivePanel()
        panel.classList.add('active')
    })
})

// function removeActiveClasses(){
//     panels.forEach(panel => {
//         panel.classList.remove('active')
//     })
// }

function SearchActivePanel(){
    panels.forEach((panel, index) => {
        if(panel.classList.contains('active')){
            lastActivePanel = index
            console.log(lastActivePanel)
            HideActivePanel()
        }
    })

}

function HideActivePanel(){
    panels[lastActivePanel].classList.add('hidden')
    countHiddenPanel++
    if(countHiddenPanel=2){
        
    }
}