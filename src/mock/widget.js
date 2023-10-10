import {
    enrollmentIcon,
    emergencyIcon,
    psychIcon,
    inpatientIcon,
    outpatientIcon,
    medicationIcon,
    procedureIcon,
    inboundIcon,
    outboundIcon,
    callIcon,
    gymIcon,
    transportationIcon,
    dentalIcon,
    visionIcon,
    mealIcon,
    teleDoctorIcon,
    approveIcon,
    denyIcon,
    oopIcon,
    labIcon,
} from './svgIcons';

export function getEventIcon(type) {
    switch (type) {
        case 'ENR.':
            return enrollmentIcon;
        case 'ER':
            return emergencyIcon;
        case 'PF':
            return psychIcon;
        case 'IP':
            return inpatientIcon;
        case 'OBS':
            return outpatientIcon;
        case 'RX':
            return medicationIcon;
        case 'PROC':
            return procedureIcon;
        case 'INBOUND':
            return inboundIcon;
        case 'OUTBOUND':
            return outboundIcon;
        case 'CALL':
            return callIcon;
        case 'GYM':
            return gymIcon;
        case 'TRANSPORTATION':
            return transportationIcon;
        case 'DENTAL':
            return dentalIcon;
        case 'VISION':
            return visionIcon;
        case 'BLACKCARD':
            return visionIcon;
        case 'MEAL':
            return mealIcon;
        case 'TELEDOCTOR':
            return teleDoctorIcon;
        case 'APPROVED':
            return approveIcon;
        case 'DENIED':
            return denyIcon;
        case 'OOP':
            return oopIcon;
        case 'LAB':
            return labIcon;
        default:
            return enrollmentIcon;
    }
}
