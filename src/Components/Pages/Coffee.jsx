import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

// eslint-disable-next-line react/prop-types
const Coffee = ({ coffee, coffees, setCoffees }) => {
    // eslint-disable-next-line react/prop-types
    const { _id, name, photo, chef, taste } = coffee;

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffees/${id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if(data.deletedCount>0){
                        Swal.fire(
                            'Deleted!',
                            'Your Coffee has been deleted.',
                            'success'
                        )
                        // eslint-disable-next-line react/prop-types
                        const remaining = coffees.filter(cof=> cof._id !== id);
                        setCoffees(remaining)
                    }
                });
            }
        });
    };

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className="w-1/3"><img className='h-48 w-full' src={photo} alt="Album" /></figure>
                <div className="card-body flex justify-between flex-row items-center">
                    <div>
                        <h2 className="card-title">Name: {name}</h2>
                        <h2 className="card-title">Chef: {chef}</h2>
                        <h2 className="card-title">Taste: {taste}</h2>
                    </div>
                    <div className="flex flex-col">
                        <Link to={`/updateCoffee/${_id}`}><button className="btn-sm btn btn-primary">Update</button></Link>
                        <button className="btn btn-sm btn-warning my-2">Details</button>
                        <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-secondary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coffee;