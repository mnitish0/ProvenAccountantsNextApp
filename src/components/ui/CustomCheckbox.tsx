import { motion } from "framer-motion";

const CustomCheckbox = ({ label, name, checked, onChange, errors, disabled = false }: { label: string, name: string, checked: boolean, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, errors?: string, disabled?: any }) => {
    return (
        <div>
            <div className="flex items-start">
                <div className="flex items-center gap-2 justify-center">
                    <div className="flex items-center h-5">
                        <input
                            id={name}
                            name={name}
                            type="checkbox"
                            checked={checked}
                            onChange={onChange}
                            className="w-4 h-4 text-sky-600 border-gray-300 rounded focus:ring-sky-500"
                            disabled={disabled}
                        />
                    </div>
                    <div>
                        <label htmlFor={name} className="text-sm font-medium text-gray-700">
                            {label}
                        </label>
                    </div>
                </div>
            </div>
            {errors && <motion.p 
            initial={{ x: 0 }} 
            animate={{ x: [0, -5, 5, -5, 5, 0] }} 
            transition={{ duration: 0.3 }}
            className="text-red-500 text-sm mt-2">{errors}</motion.p>}
        </div>
    )
}

export default CustomCheckbox