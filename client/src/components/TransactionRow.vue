<script>
export default {
    props: ['transaction', 'index'],
    methods: {
        formatDateTime (dateTimeString) {
            const options={ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
            const formattedDate=new Date(dateTimeString).toLocaleDateString('en-US', options);
            return formattedDate;
        },
    },
}
</script>
<template>
    <tr className="border-b">
        <td className="py-2 px-4">{{ index + 1 }}.</td>
        <td className="py-2 px-4 text-left">{{ transaction?.name }}</td>
        <td className="py-2 px-4 border-r text-center">{{ formatDateTime(transaction?.createdAt) }}</td>
        <td className="py-2 px-4 border-r text-center">{{ transaction?.category }}</td>
        <td className="py-2 px-4 border-r text-center">{{ transaction?.amount }}</td>
        <td className="py-2 px-4 border-r text-center">${{ transaction?.price }}</td>
    </tr>
</template>