interface IeventHub  {
    [prop:keyof any]:object,
    on:(...args:any[])=> void,
    emit:(...args:any[])=>void,
    off:(...args:any[])=>void
}

// map:{click:[fn1,fn2]}

const EventHub = {
    map:{},
    on:(eventName,fn)=>{
        EventHub.map[eventName] = EventHub.map[eventName] || []
        EventHub.map[eventName].push(fn)

    },
    emit:(eventName,data)=>{
        const fn = EventHub.map[eventName]
        if(!fn.length) return
        fn.map(f=> f.call(null,data))
    },
    off:(eventName,fn)=>{
        const R = EventHub.map[eventName]
        if(!R.length){ return}
        const index = R.indexOf(fn)
        if(!index) return
        R.splice(index,1)
    }
}

const fn1 = ()=>{console.log(1)}
const fn2 = ()=>{console.log('2')}

EventHub.on('click',fn1)
EventHub.on('click',fn2)

setTimeout(()=>{
    EventHub.emit('click',{})
},1000)