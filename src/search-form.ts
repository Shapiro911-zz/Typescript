import { renderBlock } from './lib.js'

export interface SearchFormData {
  city: string,
  checkInDate: Date,
  checkOutDate: Date,
  maxPrice: Number
}

export const search = (searchFormData, callback) => {
  console.log(searchFormData);
  callback();
}

export function renderSearchFormBlock(checkInDate: Date, checkOutDate: Date) {
  let checkInDateStr = checkInDate.toISOString().slice(0, 10);
  let checkOutDateStr = checkOutDate.toISOString().slice(0, 10);
  let checkInDateDefault = new Date(checkInDate.setDate(checkInDate.getDate() + 1)).toISOString().slice(0, 10);
  let checkOutDateDefault = new Date(checkInDate.setDate(checkInDate.getDate() + 2)).toISOString().slice(0, 10);
  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${checkInDateDefault}" min="${checkInDateStr}" max="${checkOutDateStr}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${checkOutDateDefault}" min="${checkInDateStr}" max="${checkOutDateStr}" name="checkout"/>
            </div>
            <div>
              <label for="max-price">Макс. цена суток</label>
              <input id="max-price" type="text" value="" name="price" class="max-price" />
            </div>
          <div>
            <div><button id="search-btn">Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}
