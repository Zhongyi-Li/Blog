
let field = 'adlkzjcoasd877zxc87a78sd68zx7c8 9987asd7980287zxc788a7sd78zx87cad789a7sd98z7c87a98d789zxc78aasd'
let field_ = 'lect?v=1&_v=j96&aip=1&a=982906800&t=pageview&_s=1&dl=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FString%2Fconcat&ul=zh-cn&de=UTF-8&dt=String.prototype.concat()%20-%20JavaScript%20%7C%20MDN&sd=24-bit&sr=1536x864&vp=1450x234&je=0&_u=QACAAAABAAAAAC'


const fieldHide = (str:string,len:number):string =>{
    if(!str){
        return
    }

    let newStr = String(str)
    let lens =  newStr.length
    let starStr = ''
    for(let i=0;i<=len;i++){
      starStr+='*'
    }
    const data = (newStr.slice(0,len)).concat(starStr,newStr.slice(len*2,lens-1)) 
    
  //   console.time('a')
  //   const data =  (newStr.slice(0,len)) + starStr + newStr.slice(len*2,lens-1)
  //   console.timeEnd('a');
  //   原生的 + 运算符 运算时间比concat快
    
    return data
}
const len = field.length
/**
 *   parseInt函数定义： parseInt(string: string, radix?: number): number;  第一个参数为string类型
 */

console.log(fieldHide(field, parseInt((len / 3).toString())));