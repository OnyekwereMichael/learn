interface prop {
    title: string,
    about: number,
    number?: boolean
}
export default function testing({title, about, number}:prop) {
    let name = ''
    name = 'edd'
    let nameone: number | string | boolean
    nameone = 45

    let array: (string | number)[]

    let array1 = ['hahhan', 'joe', 'kiitan']

    array1.push()

    let testArray: string[]

    testArray = ['yydd']

    let testObject = {
        userName: '',
        age: 34,
        isMarried: false
    }

    testObject.age = 23
    testObject.isMarried = true

    let obj : {
        usName: string,
        usAge: number
        isMarry: boolean,
        phone?: string
    }

     obj={
        usName: 'precious',
        usAge: 32,
        isMarry: true,
        phone: '65555'
     }

     let array4 : (string | boolean)[]

     array4 = ['red', true, "32"]

     let name4 : string | {} | []
     name4 = 32

     let func1 = ():string => {
       return 'rejssa'
     }
     console.log(func1);

     const sum = (num1: number, num2:number, another?:number) => {
       return  num2 * num1
     }

     console.log(sum(2, 4));

     let user: {
        userN: string,
        userA: number,
        theme: 'Light' | 'Dark'
     }

     user={
        userN: 'red',
        userA: 23,
        theme: 'Dark'
     }

     type myF = (num4:number, num5:number) => void

   let write: myF = (a, b) => {
  console.log(a + b);
   }

   console.log( write);

   type userInfo = {
    n: string
    age: number
    married: boolean
   }

 
   let ob: userInfo = {
    n: 'red',
    age: 3,
    married: true
   }

   interface IUser {
     Cname: string,
     Cage: number,
     Cid: string
   }

   interface Iemployee extends IUser {
    Eid: number
   }

   let whiteList: IUser = {
    Cname: 'Precious',
    Cage: 50,
    Cid: '1234578'
   }
   let whiteLis: Iemployee = {
    Cname: 'Precious',
    Cage: 50,
    Cid: '1234578',
    Eid: 23
   }

   interface user<T> {
    id: number,
    name: string,
    marrid: boolean
    extra: T[]
   }

   
let che: user<number> = {
  id: 43,
  name: 'Bethel',
  marrid: false,
  extra: [43, 56]
}

interface use3r<T extends object> {
    id: number,
    name: string,
    marrid: boolean
    extra: T[]
   }

   let chea: use3r<{id:number, name:string}> = {
    id: 43,
    name: 'Bethel',
    marrid: false,
    extra: [{id:23, name: 'mke'}]
  }


   
    return (
        <main>
           <p>{title}</p>
            <p>{about}</p>
            <p>{number}</p>
        </main>
    )
}