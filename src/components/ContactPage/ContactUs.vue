<template>
    <div class="bg-header-gray px-4 sm:px-8 lg:px-32 py-12">
        <Toast /> <!-- Toast container -->

        <Card class="w-full bg-gradient-to-b from-[#e0e0e0] to-[#FFFFFF] p-6 sm:p-10 rounded-lg">
            <template #content>
                <!-- Title Section -->
                <h1 class="text-3xl sm:text-4xl lg:text-5xl font-medium text-black text-center mb-16">
                    Contact Us
                </h1>

                <!-- Form -->
                <form @submit.prevent="handleSubmit" class="max-w-3xl mx-auto">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <!-- First Name -->
                        <div>
                            <label class="block text-base font-medium text-black mb-2">
                                First Name
                            </label>
                            <InputTextField v-model="form.firstName" class="w-full p-2 text-black"
                                placeholder="First Name" />
                        </div>

                        <!-- Last Name -->
                        <div>
                            <label class="block text-base font-medium text-black mb-2">
                                Last Name
                            </label>
                            <InputTextField v-model="form.lastName" class="w-full p-2 text-black"
                                placeholder="Last Name" />
                        </div>

                        <!-- Email -->
                        <div class="sm:col-span-2">
                            <label class="block text-base font-medium text-black mb-2">
                                Email
                            </label>
                            <InputTextField v-model="form.email" type="email" class="w-full p-2 text-black"
                                placeholder="Email address" />
                        </div>

                        <!-- Message -->
                        <div class="sm:col-span-2">
                            <label class="block text-base font-medium text-black mb-2">
                                Message
                            </label>
                            <TextAreaField v-model="form.message" rows="6" class="w-full p-2 text-black"
                                placeholder="Leave us a message..." auto-resize />
                        </div>
                    </div>

                    <!-- Button -->
                    <div class="mt-10 flex justify-center">
                        <ActionButton type="submit" label="Send Message"
                            class="px-6 py-3 rounded-xl w-full bg-black text-softer-gray" />
                    </div>
                </form>
            </template>
        </Card>
    </div>
</template>

<script>
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import Toast from "primevue/toast";
import emailjs from "@emailjs/browser";

export default {
    components: {
        Card,
        Toast,
        InputTextField: InputText, // alias
        TextAreaField: Textarea, // alias
        ActionButton: Button, // alias
    },
    data() {
        return {
            form: {
                firstName: "",
                lastName: "",
                email: "",
                message: "",
            },
        };
    },
    methods: {
        async handleSubmit() {
            if (!this.form.firstName || !this.form.lastName || !this.form.email || !this.form.message) {
                this.$toast.add({
                    severity: "error",
                    summary: "Missing Fields",
                    detail: "Please fill all fields.",
                    life: 3000,
                });
                return;
            }

            this.sending = true;

            try {
                await emailjs.send(
                    process.env.VUE_APP_EMAILJS_SERVICE_ID,
                    process.env.VUE_APP_EMAILJS_TEMPLATE_ID,
                    {
                        title: "Website Contact Form",
                        name: `${this.form.firstName} ${this.form.lastName}`,
                        email: this.form.email,
                        message: this.form.message,
                        time: new Date().toLocaleString(), // optional: since you show {{time}}
                    },
                    process.env.VUE_APP_EMAILJS_PUBLIC_KEY
                );

                this.$toast.add({
                    severity: "success",
                    summary: "Message Sent",
                    detail: "Thanks! We’ll get back to you soon.",
                    life: 3000,
                });

                this.form = { firstName: "", lastName: "", email: "", message: "" };
            } catch (err) {
                this.$toast.add({
                    severity: "error",
                    summary: "Send Failed",
                    detail: err?.text || "Could not send your message. Try again later.",
                    life: 4000,
                });
            } finally {
                this.sending = false;
            }
        }
    }
};
</script>