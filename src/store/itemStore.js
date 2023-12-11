import {create} from "zustand"
import { initialItems } from "../lib/contsant"
import {persist} from "zustand/middleware"
export const useItemStore = create(persist((set)=>({
    item: initialItems,
    removeAllTasks: ()=>{set(()=>({item: []}))},
    resetInitial : ()=>{set(()=>({item: initialItems}))},
    markAllAsComplete: ()=>{set((state)=>{

        const newObj = state.item.map((e)=>{
            return {...e,packed:true}
        })
        return {item:newObj}
    })},
    markAllInComplete : ()=>{set((state)=>{
        const newObj = state.item.map((item)=>{
            return {...item, packed: false}
        })
        return  {item: newObj}
    })},
    addNewItem : (newOneText)=>{
        const newOb = {
            id: new Date().getTime(),
            name: newOneText,
            packed: false,
          };
          set(state=>({item: [...state.item,newOb]}))
    },
    remeoveElement: (id)=>{
        set((state)=>{
            const newArray = state.item.filter((e)=> e.id !== id)
            return { item: newArray}
        })
    },
    toggleIteme: (id)=>{
        set((state)=>{
            const newItem = state.item.map((element)=>{
                if(element.id === id){
                    return {...element, packed:!element.packed}
                }
                return element
            })
            return {item: newItem}
        })
    }

}),{
    name: "chevara"
}))