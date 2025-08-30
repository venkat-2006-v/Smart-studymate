from transformers import AutoModelForCausalLM, AutoTokenizer, set_seed
import torch

# Model and device setup
model_path = "ibm-granite/granite-3.3-2b-instruct"
device = "cuda" if torch.cuda.is_available() else "cpu"

# Load model and tokenizer
model = AutoModelForCausalLM.from_pretrained(
    model_path,
    device_map=device,
    torch_dtype=torch.bfloat16,
)
tokenizer = AutoTokenizer.from_pretrained(model_path)

# Conversation prompt
conv = [{
    "role": "user",
    "content": "Take a current environmental issue and work backward to devise an innovative prevention strategy that could have averted the problem."
}]

# Tokenize and prepare inputs
inputs = tokenizer.apply_chat_template(
    conv,
    return_tensors="pt",
    add_generation_prompt=True
)
inputs = {k: v.to(device) for k, v in inputs.items()}

# Set seed for reproducibility
set_seed(42)

# Generate model output
output = model.generate(
    input_ids=inputs["input_ids"],
    attention_mask=inputs["attention_mask"],
    max_new_tokens=512,
)

# Decode and print only the generated text
generated_text = tokenizer.decode(output[0][inputs["input_ids"].shape[1]:], skip_special_tokens=True)
print(generated_text)
