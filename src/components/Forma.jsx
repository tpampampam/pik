import {useFormik } from 'formik';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataSelector, fetchData, sendData } from "../redux/dataSlice";
import { validationSchema } from '../utils/validationForm'
import { useUpdateTitle } from "../utils/useUpdateTitle";
import { SendButton } from "./SendButton";
import { useDevice } from "../utils/useDevice";
import { getRandomImage } from "../utils/common";
import { Container, Error, FormStyle, FormWrappper, HeaderWrapper, Input, InputWrapper, SubTitle, Title } from "../styles/formStyle";
import Status from './Status';



const Forma = () => {
    const {data = [], isLoading, postError, postLoading} = useSelector(dataSelector)
    const [randomImage, setRandomImage] = useState('');
    const [toggleStatus, setToggleStatus] = useState(false)
    
    const isMobile = useDevice()
    const title = useUpdateTitle()

    const dispatch = useDispatch()
 
    useEffect(() => {
        if (data.length > 0) {
          setRandomImage(getRandomImage(data, isMobile));
        }
      }, [data, isMobile]);

    useEffect(() => {
        dispatch(fetchData())
    },[])

    const formik = useFormik({
        initialValues: {     
            name: '',
            surname: '',
            email: '',
            phone: '',
            flatsCount: ''
        },
        validationSchema,
        onSubmit: (values, {resetForm}) => {
            const newCustomer = {
                user: {
                    name: values.name,
                    surname: values.surname,
                    email: values.email,
                    phone: values.phone
                },
                order: {
                    flatsCount: values.flatsCount,
                    time: new Date().getTime() / 1000
                }
            }
            console.log(JSON.stringify(newCustomer, null, 2))
            dispatch(sendData(newCustomer))
            setToggleStatus(true)
            resetForm()
        }
      })
      return (
          <FormWrappper image={randomImage}>
            <FormStyle  onSubmit={formik.handleSubmit}>
                <Title>{title}</Title>
                <SubTitle>Для бронирования помещений заполните форму</SubTitle>
                <Container>
                    <HeaderWrapper>
                        <InputWrapper>
                            <Input
                                name="name"
                                type="text"
                                placeholder="Ваше имя"
                                error={formik.errors.name && formik.touched.name}
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.name && formik.touched.name ? <Error>{formik.errors.name}</Error> : null}
                        </InputWrapper>
                        <InputWrapper>
                            <Input
                                name="surname"
                                type="text"
                                placeholder='Фамилия'
                                error={formik.errors.surname && formik.touched.surname}
                                value={formik.values.surname}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.surname && formik.touched.surname ? <Error>{formik.errors.surname }</Error> : null}
                        </InputWrapper>
                    </HeaderWrapper>

                    <InputWrapper>
                        <Input
                            name="phone"
                            type="tel"
                            placeholder="Телефон"
                            error={formik.errors.phone && formik.touched.phone}
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.phone && formik.touched.phone ? <Error>{formik.errors.phone}</Error> : null}
                    </InputWrapper>
                    <InputWrapper>
                        <Input
                            name="email"
                            type="email"
                            placeholder="Email"
                            error={formik.errors.email && formik.touched.email}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.email && formik.touched.email ? <Error>{formik.errors.email }</Error> : null}
                    </InputWrapper>
                    <InputWrapper>
                        <Input
                            name="flatsCount"
                            type="flatsCount"
                            placeholder="Количество помещений"
                            error={formik.errors.flatsCount && formik.touched.flatsCount}   
                            value={formik.values.flatsCount}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.flatsCount && formik.touched.flatsCount ? <Error>{formik.errors.flatsCount }</Error> : null}
                    </InputWrapper>
                    <SendButton
                        disabled={!formik.isValid}
                        value={formik.values.flatsCount}
                        loading={postLoading}
                    />
                </Container>
            </FormStyle>
            {(toggleStatus && !postError) 
                ? 
                <Status status="success"/> 
                : 
                (toggleStatus && postError) 
                ? 
                <Status status="error"/> 
                : null}
          </FormWrappper>
      )
}

export default Forma;
