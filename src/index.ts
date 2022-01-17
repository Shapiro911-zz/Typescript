import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'

window.addEventListener('DOMContentLoaded', () => {
    let curDate = new Date();
    let tempDate = new Date(curDate);
    let checkOutDate = new Date(tempDate.getFullYear(), tempDate.getMonth() + 2, 0);
    renderUserBlock("Wade Warren", "./img/avatar.png", 45);
    renderSearchFormBlock(curDate, checkOutDate);
    renderSearchStubBlock();
    renderToast(
        { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
        { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
    )
})
