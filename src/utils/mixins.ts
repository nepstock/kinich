import "./plugins/bootstrap-vue";

export default function makeToast(variant: string, response: string) {
  this.toast(response, {
    title: `Image ${variant || "default"}`,
    variant: variant,
    solid: true
  });
}