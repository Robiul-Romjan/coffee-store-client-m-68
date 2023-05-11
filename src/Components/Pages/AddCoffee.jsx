import Header from "../Shared/Header";
import Swal from 'sweetalert2'

const AddCoffee = () => {


    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { name, chef, supplier, taste, category, details, photo };
        // console.log(newCoffee)
        fetch("http://localhost:5000/coffees", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'New Coffee Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
                form.reset();
            })
    };


    return (
        <div>
            <Header />
            <div className="mx-auto w-1/2 p-8 mt-12 bg-[#F4F3F0] rounded">
                <div className="text-center">
                    <h2 className="text-3xl mb-5">Add New Coffee</h2>
                    <p className="text-neutral-500">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <form className="mt-8" onSubmit={handleAddCoffee}>
                    <div className="flex mb-5">
                        <input type="text" placeholder="Type coffee name" name="name" className="input input-bordered w-full max-w-xs mr-3" />
                        <input type="text" placeholder="Type coffee chef" name="chef" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="flex mb-5">
                        <input type="text" placeholder="Type coffee supplier" name="supplier" className="input input-bordered w-full max-w-xs mr-3" />
                        <input type="text" placeholder="Type coffee taste" name="taste" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="flex mb-5">
                        <input type="text" placeholder="Type coffee category" name="category" className="input input-bordered w-full max-w-xs mr-3" />
                        <input type="text" placeholder="Type coffee details" name="details" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <input type="text" placeholder="Type coffee photo url" name="photo" className="input input-bordered w-full mb-5" />
                    <input type="submit" className="btn btn-accent w-full" value="Add Coffee" />
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;