import * as Yup from 'yup';

export const validationSchema = Yup.object({

    name: Yup.string()
        .min(3, 'Минимум 3 буквы')
        .required('Заполните поле'),
    surname: Yup.string()
        .min(3, 'Минимум 3 буквы')
        .required('Заполните поле'),
    email: Yup.string()
        .email('Введите корректный емэйл')
        .required('Заполните поле'),
    phone: Yup.string()
        .matches(/^\d+$/, 'Телефон должен содержать только цифры')
        .required('Заполните поле'),
    flatsCount: Yup.string()
        .test('is-number', 'Поле должно содержать только цифры', value => /^\d+$/.test(value))
        .test('max-flats', 'Не более 20 помещений', value => {
            if (value) {
                return parseInt(value) <= 20;
            }
            return true;
        })
        .required('Заполните поле'),
})