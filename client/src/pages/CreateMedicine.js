import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const CreateMedicine = () => {
  const [medicine, setMedicine] = useState({
    productId: '',
    productName: '',
    categoryId: '',
    supplierId: '',
    unitPrice: '',
    unitsInStock: '',
  });

  // const handleWardSubmit = event => {
  //   event.preventDefault();

  //   const form = event.target;

  //   const productId = form.productId.value;
  //   const productName = form.productName.value;
  //   const categoryId = form.categoryId.value;
  //   const supplierId = form.supplierId.value;
  //   const unitPrice = form.unitPrice.value;
  //   const unitsInStock = form.unitsInStock.value;

  //   const createMedicineTemp = {
  //     productId,
  //     productName,
  //     categoryId,
  //     supplierId,
  //     unitPrice,
  //     unitsInStock,
  //   };

  //   setMedicine(createMedicineTemp);

  //   init();
  // };

  const handleChange = event => {
    event.preventDefault();

    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);

    setMedicine(prevDoc => {
      return {
        ...prevDoc,
        [name]: value,
      };
    });
  };

  const init = async () => {
    try {
      const medicineService = await axios.post(
        'http://localhost:5000/api/createMedichine',
        {
          productID: medicine.productId,
          productName: medicine.productName,
          supplierID: medicine.supplierId,
          categoryID: medicine.categoryId,
          unitprice: medicine.unitPrice,
          unitsInStoct: medicine.unitsInStock,
        }
      );

      if (medicineService) {
        console.log(medicineService);
        toast.success(medicineService.data.message);
        alert(medicineService.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Nav />

      <ToastContainer />

      <form className="w-3/6 mx-auto my-10">
        <h3 className="text-2xl text-center font-bold my-5">Add a medicine</h3>
        {/* hr */}
        <div className="space-x-5 text-center my-10">
          <div className="inline-block border-b-2  border-blue-900 w-3/4"></div>
        </div>

        {/* product ID */}
        <div className="relative z-0 mb-6 w-2/12 group">
          <input
            onChange={handleChange}
            type="text"
            name="productId"
            id="floating_product_id"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
          />
          <label
            htmlFor="floating_product_id"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Product ID
          </label>
        </div>

        <section>
          {/* product name*/}
          <div className="grid md:grid-cols-2 md:gap-56">
            <div className="relative z-0 mb-6 w-full group">
              <input
                onChange={handleChange}
                type="text"
                name="productName"
                id="floating_productName"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_productName"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Product name
              </label>
            </div>

            <div className="relative z-0 mb-6 w-full group">
              <input
                onChange={handleChange}
                type="text"
                name="categoryId"
                id="floating_categoryId"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_categoryId"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Category ID
              </label>
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-56">
            <div className="relative z-0 mb-6 w-full group">
              <input
                onChange={handleChange}
                type="text"
                name="supplierId"
                id="floating_supplierId"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_supplierId"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Supplier ID
              </label>
            </div>

            <div className="relative z-0 mb-6 w-full group">
              <input
                onChange={handleChange}
                type="text"
                name="unitPrice"
                id="floating_unitPrice"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_unitPrice"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Unit price
              </label>
            </div>
          </div>

          <div className="relative z-0 mb-6 w-full group">
            <input
              onChange={handleChange}
              type="text"
              name="unitsInStock"
              id="floating_unitsInStock"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
            />
            <label
              htmlFor="floating_unitsInStock"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Units in stock
            </label>
          </div>
        </section>

        {/* submit btn */}
        <button
          onClick={init}
          type="submit"
          className="my-5 text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold  rounded-lg text-md w-full sm:w-auto px-10 py-3 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
        <br />
        <Link
          className="hover:text-indigo-600 hover:font-bold"
          to="/viewMedicineDetails"
        >
          View Medicine Details here
        </Link>
      </form>

      <Footer />
    </div>
  );
};

export default CreateMedicine;
