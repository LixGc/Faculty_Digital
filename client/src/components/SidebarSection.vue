<script>
export default {
    methods: {
        navigateToProductDashboard () {
            this.$router.push('/')
        },
        navigateToRevenueDashboard () {
            this.$router.push('/revenue')
        },
        logout () {
            Swal.fire({
                title: 'Are you sure?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Log Out!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('Logged Out!', 'Do come back next time!.')
                    localStorage.clear()
                    this.hasLogin=false
                    this.$router.push('/login')
                }
            })
        },
    },
}
</script>
<template>
    <div>
        <div class="h-full p-3 space-y-2 w-60 dark:bg-gray-900 dark:text-gray-100 fixed left-0 top-0 bottom-0">
            <div class="flex items-center p-2 space-x-4">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fvectors%2Fman-icon-black-icon-person-symbol-vector-id1332100919%3Fk%3D20%26m%3D1332100919%26s%3D612x612%26w%3D0%26h%3DzkXGeOtSyUajHAoWxlTPTC-qWjjnUkh6twiCK9b0JoI%3D&f=1&nofb=1&ipt=6dad630a3d1b3a22b844d7c50fc6cae0e6a637427569696a513ba9d9ac082b46&ipo=images"
                    alt="" class="w-12 h-12 rounded-full dark:bg-gray-500" />
                <div>
                    <h2 class="text-lg font-semibold">Admin</h2>
                </div>
            </div>
            <div class="divide-y dark:divide-gray-700">
                <ul class="pt-2 pb-4 space-y-1 text-sm">
                    <li class="dark:bg-gray-800 dark:text-gray-50">
                        <a @click.prevent="navigateToProductDashboard" rel="noopener noreferrer" href="#"
                            class="flex items-center p-2 space-x-3 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                class="w-5 h-5 fill-current dark:text-gray-400">
                                <path
                                    d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z">
                                </path>
                            </svg>
                            <span>Products</span>
                        </a>
                    </li>
                    <li>
                        <a @click.prevent="navigateToRevenueDashboard" rel="noopener noreferrer" href="#"
                            class="flex items-center p-2 space-x-3 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                class="w-5 h-5 fill-current dark:text-gray-400">
                                <path
                                    d="M203.247,386.414,208,381.185V355.4L130.125,191H93.875L16,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42A124.343,124.343,0,0,0,203.247,386.414ZM176,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,48,369.667V362.6l64-135.112L176,362.6Z">
                                </path>
                                <path
                                    d="M418.125,191h-36.25L304,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42a124.343,124.343,0,0,0,91.369-40.607L496,381.185V355.4ZM464,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,336,369.667V362.6l64-135.112L464,362.6Z">
                                </path>
                                <path
                                    d="M272,196.659A56.223,56.223,0,0,0,309.659,159H416V127H309.659a55.991,55.991,0,0,0-107.318,0H96v32H202.341A56.223,56.223,0,0,0,240,196.659V463H136v32H376V463H272ZM232,143a24,24,0,1,1,24,24A24,24,0,0,1,232,143Z">
                                </path>
                            </svg>
                            <span>Revenue</span>
                        </a>
                    </li>
                    <li>
                        <a @click.prevent="logout" rel="noopener noreferrer" href="#"
                            class="flex items-center p-2 space-x-3 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                class="w-5 h-5 fill-current dark:text-gray-400">
                                <path
                                    d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z">
                                </path>
                                <rect width="32" height="64" x="256" y="232"></rect>
                            </svg>
                            <span>Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
