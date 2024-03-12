import { useEffect, useState } from "react";
import Header from "../componentes/Header"
import Carousel from 'react-bootstrap/Carousel';

const Contacto = () => {


    const initialValues = {name: "", email: "", tel: "", asent: "", msg: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    const handleChange = (e) => {
      //console.log(e.target);
      const {name, value} = e.target;
      setFormValues({...formValues, [name]: value});
      //console.log(formValues);
    };
  
    const handleSubmit = (e) =>{
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
    };
  
    useEffect(() => {
      // console.log(formErrors);
      if(Object.keys(formErrors.length === 0 && isSubmit)){
        console.log(formValues);
      }
    }, [formErrors, formValues, isSubmit]);
    const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      const regexName = /^[a-zA-Z\s]{2,}$/;
      const regexNumber = /[0-9]/;
  
      if(!values.name){
          errors.name = 'Es obligatorio que coloque su/s nombre/s';
      }else if(!regexName.test(values.name)){
        errors.name = 'No se aceptan números ni caracteres especiales en este campo';
      }else if(values.name.length < 8){
        errors.name = 'Este cadena debe tener más de 8 carácteres';
      }
      if(!values.email){
        errors.email = 'Es obligatorio que coloque su correo electrónico';
      }else if(!regex.test(values.email)){
        errors.email = 'Este correo no es válido';
      }
      if(!values.tel){
        errors.tel = 'Es obligatorio que coloque su número de teléfono/celular para poder contactarte';
      }else if(!regexNumber.test(values.tel)){
        errors.tel = 'Solo se aceptan números';
      }
      if(!values.asent){
          errors.asent = 'Es obligatorio que ponga el asunto a tratar';
      }
      if(!values.msg){
          errors.msg = 'Es obligatorio que escriba el mensaje a tratar del viaje que quieras viajar específicamente';
      }
      return errors;
    };
  return (
    
    <>
    
    <div>
        <Header/>
        <Carousel fade class="custom-carousel" indicators={false} controls={false}>
            <Carousel.Item>
                <img className="d-block w-100" src="/public/img/contacto.jpg" alt="First slide"/>
                <div className="overlay"></div>
                <Carousel.Caption>
                <h5>Contáctanos</h5>
                <p className="carousel-text">¿Listo para tu próxima aventura en México?<br/>
                !CONTÁCTANOS HOY MISMO Y DEJA QUE NUESTROS EXPERTOS EN TURISMO TE AYUDEN A PLANIFICAR EL VIAJE DE TUS SUEÑOS¡ Ya sea que busques relajarte
                en la playa, explorar sitios arqueológicos o sumergirte en la cultura local, estamos aquí para hacer que tu experiencia en México sea inolvidable.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <div className="form-container">
            <h1>Llénanos el formulario para contactarte</h1>
            <form onSubmit={handleSubmit} className="contact-form">
                <input type='text' id ="name" name="name" placeholder='Nombre(s)' maxLength={50}
                value={formValues.name} onChange={handleChange}/>
                <p className='error'>{formErrors.name}</p>
                <input type='text' id ="email" name="email" placeholder='Correo electrónico'
                value={formValues.email} onChange={handleChange}/>
                <p className='error'>{formErrors.email}</p>
                <input type='tel' id ="tel" name="tel" placeholder='Número de teléfono/celular'
                value={formValues.tel} onChange={handleChange}/>
                <p className='error'>{formErrors.tel}</p>
                <input type='text' id ="asent" name="asent" placeholder='Asunto'
                value={formValues.asent} onChange={handleChange}/>
                <p className='error'>{formErrors.asent}</p>
                <textarea id="msg" name="msg" placeholder='Mensaje' rows='5'
                value={formValues.msg} onChange={handleChange}></textarea>
                <p className='error'>{formErrors.msg}</p>
                <button className='btn-send'>Enviar</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Contacto