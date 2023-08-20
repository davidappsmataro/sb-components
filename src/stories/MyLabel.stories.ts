import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";

const meta={
    title: 'AppsMataro/Labels/MyLabel',
    component: MyLabel,
    tags:['autodocs'], //Genera el archivo docs con la explicación de las props automáticamente
    parameters: {
        layout: 'centered',
    },
    //como quiero que aparezcan las props en el docs
    argTypes: {
        size: { control: 'inline-radio' },
        //por defecto ya lo detecta (porque le hemos llamado fontColor) pero si lo queremos forzar le indicamos el control tipo color
        fontColor: { control: 'color'} 
    }
} satisfies Meta<typeof MyLabel>;

export default meta;

type Story=StoryObj<typeof meta>;

export const Basic: Story={
    args: { //aquí tenemos que pasar las props
        label: 'Basic Label', //esta es obligatoria en las props del componente
    }
};
export const AllCaps: Story={
    args: { //aquí tenemos que pasar las props
        label: 'AllCaps Label', //esta es obligatoria en las props del componente
        size: 'normal', //poner la opción por defecto
        allCaps: true,
    }
};
export const Secondary: Story={
    args: { //aquí tenemos que pasar las props
        label: 'Secondary Label', //esta es obligatoria en las props del componente
        color: 'text-secondary',
    }
};
export const CustomColor: Story={
    args: { //aquí tenemos que pasar las props
        label: 'CustomColor Label', //esta es obligatoria en las props del componente
        fontColor: '#CCC134'
    }
};