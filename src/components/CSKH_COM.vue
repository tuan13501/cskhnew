<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
        <TabView ref="tabview1">
          <TabPanel header="Hóa đơn">
            <DataTable
              filterDisplay="row"
              dataKey="id"
              ref="dt"
              :value="invoices"
              :scrollable="true"
              scrollHeight="400px"
              scrollDirection="both"
              class="mt-3"
              v-model:filters="filters1"
              :loading="loading1"
              :filters="filters1"
              responsiveLayout="scroll"
              :globalFilterFields="['Content']"
            >
              <template #header>
                <div style="text-align: left">
                  <Button
                    icon="pi pi-external-link"
                    label="Export"
                    @click="exportCSV($event)"
                  />
                </div>
              </template>

              <Column
                field="Id"
                header="Id"
                :style="{ width: '100px' }"
                frozen
              ></Column>
              <Column
                field="Content"
                header="Content"
                :style="{ width: '200px' }"
                filterField="Content"
                frozen
              >
                <template #body="{ data }">
                  {{ data.Content }}
                </template>
                <template #filter="{ filterModel, filterCallback }">
                  <InputText
                    v-tooltip.top.focus="'Nhấn enter để tìm kiếm'"
                    type="text"
                    @keydown.enter="filterCallback()"
                    v-model="filterModel.value"
                    class="p-column-filter"
                    placeholder="Tìm kiếm"
                  />
                </template>
              </Column>
              <Column
                field="Amount"
                header="Amount"
                :style="{ width: '200px' }"
              ></Column>
              <Column
                field="Location"
                header="Location"
                :style="{ width: '200px' }"
              ></Column>
              <Column
                field="InvoiceNum"
                header="InvoiceNum"
                :style="{ width: '200px' }"
              ></Column>
              <Column
                field="Price"
                header="Price"
                :style="{ width: '200px' }"
              ></Column>
              <Column
                field="UnitPrice"
                header="UnitPrice"
                :style="{ width: '200px' }"
              ></Column>
              <Column
                field="Note"
                header="Note"
                :style="{ width: '200px' }"
              ></Column>
              <Column
                field="InvoiceDate"
                header="InvoiceDate"
                :style="{ width: '200px' }"
              ></Column>
              <Column
                field="PaymentDate"
                header="PaymentDate"
                :style="{ width: '200px' }"
              ></Column>
              <Column
                field="Type"
                header="Type"
                :style="{ width: '100px' }"
              ></Column>
								<Column headerStyle="width:1rem">
                  <template #body="{ data }">
										<Button icon="pi pi-trash"  @click="onDelete(data.Id)" />
									</template>
								</Column>
            </DataTable>
          </TabPanel>
          <TabPanel header="chi tiết">
            <DataTable
              filterDisplay="row"
              dataKey="id"
              ref="dts"
              :value="invoiceDetails"
              :scrollable="true"
              scrollHeight="400px"
              scrollDirection="both"
              class="mt-3"
              v-model:filters="filters1"
              :loading="loading1"
              :filters="filters1"
              responsiveLayout="scroll"
              :globalFilterFields="['Content']"
            
            
            >
              <Column
                field="Id"
                header="Id"
                :style="{ width: '100px' }"
                frozen
              ></Column>
              <Column
                field="ReciverDate"
                header="ReciverDate"
                :style="{ width: '200px' }"
                filterField="Content"
                frozen
              >
              </Column>
              <Column
                field="OrderDate"
                header="OrderDate"
                :style="{ width: '200px' }"
              ></Column>
              <Column
                field="Num"
                header="Num"
                :style="{ width: '200px' }"
              ></Column>
              <Column
                field="VerhicleNumber"
                header="VerhicleNumber"
                :style="{ width: '200px' }"
              ></Column>
              <Column
                field="Router"
                header="Router"
                :style="{ width: '200px' }"
              ></Column>
              <Column
                field="GoodType"
                header="GoodType"
                :style="{ width: '200px' }"
              ></Column>
              <Column
                field="totalWeightReviver"
                header="totalWeightReviver"
                :style="{ width: '200px' }"
              ></Column>
              <Column
                field="totalWeightOrder"
                header="totalWeightOrder"
                :style="{ width: '200px' }"
              ></Column>
              <Column
                field="weight"
                header="weight"
                :style="{ width: '200px' }"
              ></Column>
            </DataTable>
          </TabPanel>
        </TabView>
      </div>
    </div>
  </div>
</template>

<script>
import { FilterMatchMode, FilterOperator } from "primevue/api";
import CustomerService from "../service/CustomerService";
import ProductService from "../service/ProductService";
import InvoiceService from "../service/InvoiceService";
import {useRoute} from "vue-router";


export default {
  data() {
    return {
      customer1: null,
      customer2: null,
      customer3: null,
      filters1: null,
      filters2: {},
      loading1: true,
      loading2: true,
      idFrozen: false,
      products: null,
      invoices: null,
      invoiceDetails: null,
      expandedRows: [],
      statuses: [
        "unqualified",
        "qualified",
        "new",
        "negotiation",
        "renewal",
        "proposal",
      ],
      representatives: [
        { name: "Amy Elsner", image: "amyelsner.png" },
        { name: "Anna Fali", image: "annafali.png" },
        { name: "Asiya Javayant", image: "asiyajavayant.png" },
        { name: "Bernardo Dominic", image: "bernardodominic.png" },
        { name: "Elwin Sharvill", image: "elwinsharvill.png" },
        { name: "Ioni Bowcher", image: "ionibowcher.png" },
        { name: "Ivan Magalhaes", image: "ivanmagalhaes.png" },
        { name: "Onyama Limba", image: "onyamalimba.png" },
        { name: "Stephen Shaw", image: "stephenshaw.png" },
        { name: "XuXue Feng", image: "xuxuefeng.png" },
      ],
    };
  },
  customerService: null,
  productService: null,
  invoiceService: null,
  
  setup(){
  } ,
  created() {
    this.customerService = new CustomerService();
    this.productService = new ProductService();
    this.invoiceService = new InvoiceService();
    this.initFilters1();
  },
  mounted() {
    console.log(this.$router.currentRoute);
    const route = useRoute();
    console.log(route.params);

    this.invoiceService.getInvoiceByCompany(route.companyId).then((data) => (this.invoices = data));
    this.invoiceService
      .getInvoiceByCompany(route.companyId)
      .then((data) => (this.invoiceDetails = data));
    this.loading1 = false;
    this.loading2 = false;

    this.productService
      .getProductsWithOrdersSmall()
      .then((data) => (this.products = data));
    this.customerService.getCustomersLarge().then((data) => {
      this.customer1 = data;
      this.loading1 = false;
      this.customer1.forEach(
        (customer) => (customer.date = new Date(customer.date))
      );
    });
    this.customerService
      .getCustomersLarge()
      .then((data) => (this.customer2 = data));
    this.customerService
      .getCustomersMedium()
      .then((data) => (this.customer3 = data));
    this.loading2 = false;
  },
  methods: {

    onDelete(id) {
      console.log(id);
      this.invoiceService
      .deleteInvoice(id)
       .then((id) => {
          this.$toast.add({severity: 'info', summary: 'Deleted', detail: 'Id: ' + id, life: 3000});
          this.invoiceService.getInvoice().then((data) => (this.invoices = data));
          console.log("ok");
      })
      .catch(error => error);
          this.$toast.add({severity: 'info', summary: 'Delete Fail', detail: 'Id: ' + id, life: 3000});
          console.log("false");
      },

    exportCSV() {
      this.$refs.dt.exportCSV();
    },
    initFilters1() {
      this.filters1 = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: {
          operator: FilterOperator.AND,
          constraints: [
            { value: null, matchMode: FilterMatchMode.STARTS_WITH },
          ],
        },
        "country.name": {
          operator: FilterOperator.AND,
          constraints: [
            { value: null, matchMode: FilterMatchMode.STARTS_WITH },
          ],
        },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        date: {
          operator: FilterOperator.AND,
          constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
        },
        balance: {
          operator: FilterOperator.AND,
          constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
        },
        status: {
          operator: FilterOperator.OR,
          constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
        },
        activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
        verified: { value: null, matchMode: FilterMatchMode.EQUALS },
        Content: {
          operator: FilterOperator.AND,
          constraints: [
            { value: null, matchMode: FilterMatchMode.STARTS_WITH },
          ],
        },
      };
    },
    clearFilter1() {
      this.initFilters1();
    },
    expandAll() {
      this.expandedRows = this.products.filter((p) => p.id);
    },
    collapseAll() {
      this.expandedRows = null;
    },
    formatCurrency(value) {
      return value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    },
    formatDate(value) {
      return value.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    },
    calculateCustomerTotal(name) {
      let total = 0;
      if (this.customer3) {
        for (let customer of this.customer3) {
          if (customer.representative.name === name) {
            total++;
          }
        }
      }

      return total;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/demo/badges.scss";

::v-deep(.p-datatable-frozen-tbody) {
  font-weight: bold;
}

::v-deep(.p-datatable-scrollable .p-frozen-column) {
  font-weight: bold;
}
</style>
