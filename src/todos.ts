export interface todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const getTodos = (number: number) => {
    return fetch('https://jsonplaceholder.typicode.com/todos/' + number)
        .then((response) => {
            return response.text()
        })
        .then<todo>((responseText) => {
            return JSON.parse(responseText)
        })
        .then((data) => {
            return data;
        })
        .then((data) => {
            console.log(data);
        })

}

export const getTodosByCount = (count: number) => {
    for (let i = 1; i < count + 1; i++) {
        getTodos(i);
    }
}