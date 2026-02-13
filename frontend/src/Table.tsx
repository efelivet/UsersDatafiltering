interface Data {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}


import './App.css'

export default function Table ({items}:{items:Data[]}){
   return(
    <>
    <table >
   <thead>
        <tr>
          <th >First Name</th>
          <th >Last Name</th>
          <th >Email</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td >{item.first_name}</td>
            <td >{item.last_name}</td>
            <td >{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
   ) 
}