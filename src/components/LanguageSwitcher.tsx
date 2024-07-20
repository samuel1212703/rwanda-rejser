import React from 'react';
import Select, { SingleValue } from 'react-select';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@mui/material'; // For responsive design

// Flags
import dk from '../images/flags/dk.svg'
import gb from '../images/flags/gb.svg'

// Define a type for the options
interface OptionType {
    value: string;
    label: string;
    icon: JSX.Element; // Assuming you have SVGs or image elements for icons
}

// Define options with icons and labels
const options: OptionType[] = [
    {
        value: 'en',
        label: 'English',
        icon: <img src={gb} alt="English" style={{ width: 36, height: 36 }} />
    },
    {
        value: 'da',
        label: 'Dansk',
        icon: <img src={dk} alt="Dansk" style={{ width: 36, height: 36 }} />
    }
];

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();
    const isSmallScreen = useMediaQuery('(max-width:600px)'); // Change based on your needs

    // Handle language change
    const handleChange = (selectedOption: SingleValue<OptionType>) => {
        if (selectedOption) {
            i18n.changeLanguage(selectedOption.value);
        }
    };

    // Custom option label rendering
    const formatOptionLabel = (option: OptionType) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {isSmallScreen ? (
                <span>{option.icon}</span> // Show only the icon on small screens
            ) : (
                <>
                    {option.icon}
                    <span style={{ marginLeft: 8 }}>{option.label}</span>
                </>
            )}
        </div>
    );

    return (
        <div style={{color: 'black'}}>
            <Select
                options={options}
                formatOptionLabel={formatOptionLabel}
                onChange={handleChange}
                placeholder="Select Language"
                isSearchable={false} // Disable search
                styles={{
                    container: (provided) => ({
                        ...provided,
                        width: '200px' // Adjust width as needed
                    }),
                    menu: (provided) => ({
                        ...provided,
                        zIndex: 9999 // Ensure dropdown is above other elements
                    }),
                    option: (provided) => ({
                        ...provided,
                        display: 'flex',
                        alignItems: 'center'
                    })
                }}
            />
        </div>
    );
};

export default LanguageSwitcher;
