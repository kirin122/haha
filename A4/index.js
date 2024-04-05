/*
    4. 編寫一個 JavaScript 函數，實現對以下 JSON 數據 (參照以下連結的檔案) 的處理： 給定一組用戶資料和他們的訂單數據，要求計算每個用戶的總訂單金額並按金額由高到低排序，最後返回排序後的用戶列表及其對應的總金額。
*/


import userData from '/static/userData'

function sortOrder(json) {
    const data = JSON.parse(JSON.stringify(json))
    // a. 雙迴圈取總金額
    for (let i = 0; i < data.length; i++) {
        const orders = data[i].orders
        let totalPrice = 0
        for (let j = 0; j < orders.length; j++) {
            totalPrice += orders[j].amount
        }
        data[i].totalPrice = Number(totalPrice.toFixed(3))
    }
    // b. 排序
    data.sort((a, b) => b.totalPrice - a.totalPrice)
}

sortOrder(userData)