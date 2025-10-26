import IconBuildIn from '../../public/icon/partConstruction/IconBuildin'
import IconCeiling from '../../public/icon/partConstruction/IconCeiling'
import IconFlooringAndTiling from '../../public/icon/partConstruction/IconFlooringAndTiling'
import IconGlass from '../../public/icon/partConstruction/IconGlass'
import IconMaintenance from '../../public/icon/partConstruction/IconMaintenance'
import IconPainting from '../../public/icon/partConstruction/IconPainting'
import IconPartitioning from '../../public/icon/partConstruction/IconPartitioning'
import IconRenovation from '../../public/icon/partConstruction/IconRenovation'
import IconStainlessSteel from '../../public/icon/partConstruction/IconStainlessSteel'
import IconStructureDemolition from '../../public/icon/partConstruction/IconStructureDemolition'

export function getIconPartConstruction(
    title: string,
    width?: number,
    height?: number
) {
    const widthDefault = 40
    const heightDefault = 40
    switch (title) {
        case 'renovation':
            return (
                <IconRenovation
                    width={width ? width : widthDefault}
                    height={height ? height : heightDefault}
                />
            )
        case 'work-flow':
            return (
                <IconRenovation
                    width={width ? width : widthDefault}
                    height={height ? height : heightDefault}
                />
            )
        case 'buildin':
            return (
                <IconBuildIn
                    width={width ? width : widthDefault}
                    height={height ? height : heightDefault}
                />
            )
        case 'partitioning':
            return (
                <IconPartitioning
                    width={width ? width : widthDefault}
                    height={height ? height : heightDefault}
                />
            )
        case 'painting':
            return (
                <IconPainting
                    width={width ? width : widthDefault}
                    height={height ? height : heightDefault}
                />
            )
        case 'ceiling':
            return (
                <IconCeiling
                    width={width ? width : widthDefault}
                    height={height ? height : heightDefault}
                />
            )
        case 'glass':
            return (
                <IconGlass
                    width={width ? width : widthDefault}
                    height={height ? height : heightDefault}
                />
            )
        case 'stainless-steel':
            return (
                <IconStainlessSteel
                    width={width ? width : widthDefault}
                    height={height ? height : heightDefault}
                />
            )
        case 'structure-demolition':
            return (
                <IconStructureDemolition
                    width={width ? width : widthDefault}
                    height={height ? height : heightDefault}
                />
            )
        case 'maintenance':
            return (
                <IconMaintenance
                    width={width ? width : widthDefault}
                    height={height ? height : heightDefault}
                />
            )
        case 'flooring-and-tiling':
            return (
                <IconFlooringAndTiling
                    width={width ? width : widthDefault}
                    height={height ? height : heightDefault}
                />
            )
        default:
            return null
    }
}
