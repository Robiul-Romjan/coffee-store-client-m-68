import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const UpdateCoffee = () => {
    const loadedCoffee = useLoaderData();
    const { _id, name, chef, supplier, taste, category, details, photo} = loadedCoffee;

    const handleUpdateCoffee = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = { name, chef, supplier, taste, category, details, photo };
        // console.log(updatedCoffee)
        fetch(`http://localhost:5000/coffees/${_id}`, {
            method: "PUT",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            if (data.modifiedCount > 0 ) {
                Swal.fire({
                    title: 'success!',
                    text: 'Coffee Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            }
            form.reset();
        })
    };

    return (
        <div>
            <div className="mx-auto w-1/2 p-8 mt-12 bg-[#F4F3F0] rounded">
                <div className="text-center">
                    <h2 className="text-3xl mb-5">Update Coffee Details</h2>
                    <p className="text-neutral-500">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <form className="mt-8" onSubmit={handleUpdateCoffee}>
                    <div className="flex mb-5">
                        <input type="text" defaultValue={name} placeholder="Type coffee name" name="name" className="input input-bordered w-full max-w-xs mr-3" />
                        <input type="text" defaultValue={chef} placeholder="Type coffee chef" name="chef" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="flex mb-5">
                        <input type="text" defaultValue={supplier} placeholder="Type coffee supplier" name="supplier" className="input input-bordered w-full max-w-xs mr-3" />
                        <input type="text" defaultValue={taste} placeholder="Type coffee taste" name="taste" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="flex mb-5">
                        <input type="text" defaultValue={category} placeholder="Type coffee category" name="category" className="input input-bordered w-full max-w-xs mr-3" />
                        <input type="text" defaultValue={details} placeholder="Type coffee details" name="details" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <input type="text" defaultValue={photo} placeholder="Type coffee photo url" name="photo" className="input input-bordered w-full mb-5" />
                    <input type="submit" className="btn btn-accent w-full" value="Update Coffee" />
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;