from rest_framework.views import exception_handler

def standardized_exception_handler(exc, context):
    response = exception_handler(exc, context)

    if response is not None:
        error_message = "An error occurred."
        error_data = None

        if "detail" in response.data:
            error_message = response.data["detail"]
        
        elif isinstance(response.data, dict):
            error_data = response.data
            first_key = list(response.data.keys())[0]
            if isinstance(response.data[first_key], list):
                error_message = f"{first_key}: {response.data[first_key][0]}"
            else:
                error_message = "Validation Error"

        response.data = {
            "success": False,
            "message": error_message,
            "data": error_data
        }

    return response
