import styles from './input.module.scss'

const Input = ({label, ...props }) => {
return (
    <label>{label}
        <input {...props} />
    </label>
  )
}
export default Input
