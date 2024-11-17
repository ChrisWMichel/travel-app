<template>
    <div class="invoices">
        <h1>Invoices</h1>
        <table>
            <thead>
                <tr>
                    <th>Invoice Number</th>
                    <th>Amount</th>
                    <th>Due Date</th>
                </tr>
            </thead>
            <tbody>
                <!-- <tr v-for="invoice in invoices" :key="invoice.id">
                    <td>{{ invoice.invoiceNumber }}</td>
                    <td>{{ invoice.amount }}</td>
                    <td>{{ invoice.dueDate }}</td>
                </tr> -->
            </tbody>
        </table>
    </div>
</template>

<script setup>
    import { onBeforeRouteLeave } from 'vue-router';

    onBeforeRouteLeave((to, from, next) => {
        if (window.confirm('Are you sure you want to leave?')) {
            next();
        } else {
            next(false);
        }
    });
</script>