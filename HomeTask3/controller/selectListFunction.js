export class SelectList{
    constructor(){
        this.selectList = document.querySelector('select');
    }
    
    contentDisplay(){
        this.selectList.addEventListener('change', () => {
            let select = document.querySelector('select');
            let selectedCategory = select[select.selectedIndex].value
            let divisions = document.querySelectorAll ('.M');
            for (const division of divisions) {
                if (division.getAttribute('category-id') === selectedCategory || selectedCategory === 'All') {
                    division.style.display = 'block';
                } else {
                    division.style.display = 'none';
                }
            }
        });
    }
}