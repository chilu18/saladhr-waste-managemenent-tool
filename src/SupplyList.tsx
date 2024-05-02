import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

interface Supply {
 name: string;
 description: string;
 weight: number;
}

const SupplyList: React.FC = () => {
 const supplies: Supply[] = [
   { name: 'Supply 1', description: 'This is a sample supply', weight: 10 },
   { name: 'Supply 2', description: 'Another sample supply', weight: 15 },
   { name: 'Supply 3', description: 'Yet another sample supply', weight: 20 },
 ];

 return (
   <section className="section">
     <div className="container">
       <br></br>
       <h1 className="title">
         <FontAwesomeIcon icon={faPlusCircle} /> Supply List
       </h1>
       <div className="card">
         <div className="card-content">
           <table className="table is-striped is-fullwidth">
             <thead>
               <tr>
                 <th>Name</th>
                 <th>Description</th>
                 <th>Weight</th>
               </tr>
             </thead>
             <tbody>
               {supplies.map((supply, index) => (
                 <tr key={index}>
                   <td>{supply.name}</td>
                   <td>{supply.description}</td>
                   <td>{supply.weight}</td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
       </div>
       <div><br></br></div>
       <Link to="/supplies" className="button is-primary">
         <FontAwesomeIcon icon={faPlusCircle} /> &nbsp;&nbsp; Add Supply
       </Link>
     </div>
        <div><br></br></div>
     <div>
        <p>
        <Link to="/max" className="button is-link is-light">
          <FontAwesomeIcon icon={faTimes} /> &nbsp;&nbsp; Back to Max
        </Link>
        </p>
     </div>
   </section>
 );
};

export default SupplyList;
