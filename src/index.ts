import { renderSearchFormBlock, SearchFormData, search } from './search-form.js'
import { renderSearchStubBlock, renderSearchResultsBlock, renderEmptyOrErrorSearchBlock } from './search-results.js'
import { renderUserBlock, getUserData, getFavoritesAmount } from './user.js'
import { renderToast } from './lib.js'

window.addEventListener('DOMContentLoaded', () => {
    let curDate = new Date();
    let tempDate = new Date(curDate);
    let checkOutDate = new Date(tempDate.getFullYear(), tempDate.getMonth() + 2, 0);
    let user = getUserData();
    let favoritesAmount = getFavoritesAmount();

    renderUserBlock(user.username, user.avatarUrl, favoritesAmount);
    renderSearchFormBlock(curDate, checkOutDate);
    renderSearchStubBlock();
    renderToast(
        { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
        { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
    )

    const searchBtn = document.getElementById("search-btn");
    const cityInput = document.getElementById("city") as HTMLInputElement;
    const checkInInput = new Date((document.getElementById("check-in-date") as HTMLInputElement).value);
    const checkOutInput = new Date((document.getElementById("check-out-date") as HTMLInputElement).value);
    const maxPriceInput = document.getElementById("max-price") as HTMLInputElement;

    interface Place {

    }

    const searchCallback = (error: Error, results: Place[]) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                renderSearchResultsBlock();
            } else {
                renderEmptyOrErrorSearchBlock(error);
            }
        }, 2000)
    }

    searchBtn.addEventListener("click", event => {
        event.preventDefault()
        const searchFormData: SearchFormData = {
            city: cityInput.value,
            checkInDate: checkInInput,
            checkOutDate: checkOutInput,
            maxPrice: parseInt(maxPriceInput.value),
        }

        search(searchFormData, searchCallback);
    })
})
