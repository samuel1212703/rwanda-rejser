import React, { useState } from 'react';
import Select, { SingleValue, components } from 'react-select';
import { useTranslation } from 'react-i18next';

// Flags
import dk from '../images/flags/dk.svg';
import gb from '../images/flags/gb.svg';

// Define a type for the options
interface OptionType {
    value: string;
    label: string;
    icon: JSX.Element; // Assuming you have SVGs or image elements for icons
}

// Define options with icons and labels
const options: OptionType[] = [
    {
        value: 'da',
        label: 'Dansk',
        icon: <img src={dk} alt="Dansk" style={{ width: 36, height: 36 }} />
    },
    {
        value: 'en',
        label: 'English',
        icon: <img src={gb} alt="English" style={{ width: 36, height: 36 }} />
    },
];

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();
    const [selectedLanguageFlag, setSelectedLanguageFlag] = useState<JSX.Element>(options[0].icon)

    // Handle language change
    const handleChange = (selectedOption: SingleValue<OptionType>) => {
        if (selectedOption) {
            i18n.changeLanguage(selectedOption.value);
            setSelectedLanguageFlag(selectedOption.icon)
        }
    };

    return (
        <div style={{ color: 'black' }}>
            <Select
                options={options}
                formatOptionLabel={(option: OptionType) => option.icon}
                onChange={handleChange}
                placeholder={selectedLanguageFlag}
                isSearchable={false} // Disable search
                styles={{
                    container: (provided) => ({
                        ...provided,
                        width: '120px' // Adjust width as needed
                    }),
                    menu: (provided) => ({
                        ...provided,
                        zIndex: 9999 // Ensure dropdown is above other elements
                    }),
                    option: (provided) => ({
                        ...provided,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }),
                    singleValue: (provided) => ({
                        ...provided,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    })
                }}
            />
        </div>
    );
};

export default LanguageSwitcher;
