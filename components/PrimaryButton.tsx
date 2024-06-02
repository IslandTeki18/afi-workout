import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

type PrimaryButtonProps = {
    title: string
    size?: 'small' | 'medium' | 'large'
    handlePress: () => void
}

export const PrimaryButton = (props: PrimaryButtonProps) => {

    function handleSize() {
        switch (props.size) {
            case 'small':
                return 'py-2 px-4'
            case 'medium':
                return 'py-4 px-6'
            case 'large':
                return 'py-6 px-8'
            default:
                return 'py-4 px-6'
        }

    }
    return (
        <TouchableOpacity className={`bg-primary w-full items-center ${handleSize()} rounded-lg`} onPress={props.handlePress}>
            <Text className="text-mdTitle font-semibold" style={{ color: "#ffffff" }}>{props.title}</Text>
        </TouchableOpacity>
    )
}

