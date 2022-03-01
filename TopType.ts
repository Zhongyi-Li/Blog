//any unknown never 的区别 : ，     

const names:any = 'Leonardo'
const nickName:string = names

const info:unknown = 'user'
// const userInfo:string = info   //报错
const userInfo:string = <string> info  //用断言 收窄后不报错

interface Foo {
    type: 'foo'
  }
  
  interface Bar {
    type: 'bar'
  }
  
  type All = Foo | Bar
  const val = {type:'foo'}

    switch (val.type) {
      case 'foo':
        // 这里 val 被收窄为 Foo
        break
      case 'bar':
        // val 在这里是 Bar
        break
      default:
        // val 在这里是 never
        const exhaustiveCheck: never = val
        break
    }

/***
 * any unknown都是顶级类型 它们可以接收所有的类型
 * 任何类型都能接受any类型的变量(any跳过了类型检查) 
 * 但是unknown不行，unknown要求先收窄类型。 也就是说要明确知道当前的赋值的变量是什么类型
 * never指是一个不存在的类型 或者空的类型 这里不要又任何的操作，通常用来做为逻辑的兜底方案
 */






