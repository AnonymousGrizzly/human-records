import React from 'react'
import { useForm } from 'react-hook-form'
import { validateAge, validateName, validateAdress, validateWeightOrHeight } from '../functions/validateFields'
import Input from './Input'
import propTypes from 'prop-types'

Form.propTypes = {
    onFormSubmit: propTypes.func.isRequired
}

const team = ['Blue', 'Red', 'Neutral']

export default function Form({ onFormSubmit }) {
    const { register, handleSubmit, reset, formState: {errors}} = useForm()

    const onSubmit = handleSubmit((data) => {
        const bmi = (parseFloat(data.weight)/Math.pow(parseFloat(data.height)/100, 2)).toFixed(2)
        data.bmi = bmi
        onFormSubmit(data)
        reset()
    })

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                <Input pretext={'Name:'} placeholder={'Name'} type='text' register={register('name', {required: true, validate: validateName})} errors={errors.name} errorText='Error!'/>
            </label>
            <label>
                <Input pretext={'Surname:'} placeholder={'Surname'} type='text' register={register('surname', {required: true, validate: validateName})} errors={errors.surname} errorText='Error!'/>
            </label>
            <label>
                <Input pretext={'Age:'} placeholder={'Age (years)'} type='number' register={register('age', {required: true, validate: validateAge})} errors={errors.age} errorText='Error!'/>
            </label>
            <label>
                <Input pretext={'Address:'} placeholder={'Address'} type='text' register={register('address', {required: true, validate: validateAdress})} errors={errors.address} errorText='Error!'/>
            </label>
            <label>
                <Input pretext={'Weight:'} placeholder={'Weight (kg)'} type='text' register={register('weight', {required: true, validate: validateWeightOrHeight})} errors={errors.weight} errorText='Error!'/>
            </label>
            <label>
                <Input pretext={'Height:'} placeholder={'Height (cm)'} type='text' register={register('height', {required: true, validate: validateWeightOrHeight})} errors={errors.height} errorText='Error!'/>
            </label>
            <label>
                <label>
                    <Input pretext={'Male'}  type='radio' register={register('gender', {required: true})} value='male'/>
                </label> 
                <label>
                    <Input pretext={'Female'}  type='radio' register={register('gender', {required: true})} value='female'/>
                </label>
                    {errors.gender && <span>Error!</span>}
            </label>
            <label>
                Team:
                <select {...register('team')}>
                    {team.map((team) => (
                    <option key={team} value={team}>
                        {team}
                    </option>
                    ))}
                </select>
            </label>
    
            <button type="submit">SUBMIT</button>
        </form>
    )
}
