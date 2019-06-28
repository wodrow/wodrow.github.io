<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="container">
      <div class="row">
        <div class="col-6">1</div>
        <div class="col-6">
          <div>
            <b-alert show>Default Alert</b-alert>

            <b-alert variant="success" show>Success Alert</b-alert>

            <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
              Dismissible Alert!
            </b-alert>

            <b-alert
                    :show="dismissCountDown"
                    dismissible
                    variant="warning"
                    @dismissed="dismissCountDown=0"
                    @dismiss-count-down="countDownChanged"
            >
              <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
              <b-progress
                      variant="warning"
                      :max="dismissSecs"
                      :value="dismissCountDown"
                      height="4px"
              ></b-progress>
            </b-alert>

            <b-button @click="showAlert" variant="info" class="m-1">
              Show alert with count-down timer
            </b-button>
            <b-button @click="showDismissibleAlert=true" variant="info" class="m-1">
              Show dismissible alert ({{ showDismissibleAlert ? 'visible' : 'hidden' }})
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                dismissSecs: 10,
                dismissCountDown: 0,
                showDismissibleAlert: false
            }
        },
        methods: {
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown
            },
            showAlert() {
                this.dismissCountDown = this.dismissSecs
            }
        }
    }
</script>
