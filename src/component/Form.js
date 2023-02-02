import { useForm } from "react-hook-form";
function LoginForm() {

    const { register, handleSubmit, 
        formState: { isSubmitting, isDirty, errors },
    } = useForm();
    //로그인폼에서 사용자가 이벤트 처리가 미처 종료되기 전에 다시 로그인 버튼을 클릭할 경우 양식이 중복해서 제출되는 문제가 발생
    //로그인 버튼을 클릭하지 마자, 해당 버튼을 비활성화 시켰다가, 이벤트 처리가 완료되었을 때, 제출 버튼을 다시 활성화 
    // useForm() 훅(hook) 함수가 반환하는 객체의 formState 속성은 양식이 현재 어떤 상태인지를 담고 있는데요. 
    // 이 formState으로 부터 isSubmitting 속성을 읽어서 양식이 현재 제출 중인 상태인지 아닌지를 알아낼 수 있습니다.

    //HTML에서 입력란 검증을 위해 기본적으로 제공되는 required, pattern, minLength와 같은 검증 타입을 사용

    const onSubmit = async (data) =>{
        await new Promise((r) => setTimeout(r, 1000));
        alert(JSON.stringify(data))
        }

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
            <ul>
                <li>
                <label htmlFor="email">이메일</label>
                    <input
                    id="email"
                    type="email"
                    {...register("email", {
                        required: "이메일은 필수 입력입니다.",
                        pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "이메일 형식에 맞지 않습니다.",
                        },
                    })}
                    placeholder="test@email.com"
                    />
                    {errors.email && <p role="alert">{errors.email.message}</p>}
                </li>
                <li>
                <label htmlFor="password">비밀번호</label>
                    <input
                    id="password"
                    type="password"
                    {...register("password" ,{
                        required: "비밀번호는 필수 입력입니다.",
                        minLength: {
                        value: 8,
                        message: "8자리 이상 비밀번호를 사용하세요.",
                        },
                    })}
                    placeholder="****************"
                    />
                    {errors.password && <p role="alert">{errors.password.message}</p>}
                </li>
                <li>
                <label htmlFor="gender">성별</label> 
                <select {...register("gender")} id="gender">
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>
                   
                </li>
                <li>
                    <label htmlFor='January'>January</label>
                    <input
                        type='checkbox'
                        placeholder='February'
                        {...register('January', {})}
                        
                    />
                    <label htmlFor='February'>February</label>
                    <input
                        type='checkbox'
                        placeholder='February'
                        {...register('February', {})}
                        
                    />

                </li>
            </ul>
            <p>
               <button type="submit" disabled={isSubmitting}>로그인</button>
            </p>
        
        
            
      </form>
    );
  }
  
  export default LoginForm;