// 变量声明 const

const numLivesForCat = 9;

const kitty = {
    name: 'Kitty',
    numLives: numLivesForCat
}

// 报错
kitty = {
    name: 'Tommy',
    numLives: numLivesForCat
}

// 不报错 引用没被修改
kitty.name = 'Jerry';
kitty.numLives--;
