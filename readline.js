const readline = require('realine')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question('원하는 도형을 작성해주세요:', input => {
    console.log(input)
    rl.close()
})

//알수가 없음