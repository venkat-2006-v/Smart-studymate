const utils = {
    validateSubject: (subject) => {
        const validSubjects = ['Mathematics', 'Science', 'History'];
        return validSubjects.includes(subject);
    },

    formatResponse: (data, message = 'Success') => {
        return {
            status: 'success',
            message: message,
            data: data
        };
    },

    handleError: (error) => {
        return {
            status: 'error',
            message: error.message || 'An error occurred'
        };
    }
};

export default utils;